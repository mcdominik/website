declare global {
  interface Window {
    posthog?: {
      capture: (event: string, properties?: Record<string, unknown>) => void;
    };
    onYouTubeIframeAPIReady?: () => void;
    YT?: {
      Player: new (
        element: string | HTMLElement,
        options: {
          events?: {
            onReady?: (event: { target: unknown }) => void;
            onStateChange?: (event: { data: number }) => void;
          };
        }
      ) => {
        destroy: () => void;
      };
      PlayerState: {
        PLAYING: number;
        PAUSED: number;
        ENDED: number;
      };
    };
  }
}

const TRACKED_EVENTS = {
  PLAY: "youtube_video_play",
  PAUSE: "youtube_video_pause",
  ENDED: "youtube_video_ended",
} as const;

let isAPILoaded = false;
const players: Map<HTMLIFrameElement, unknown> = new Map();

function loadYouTubeAPI(): void {
  if (isAPILoaded) return;

  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
  isAPILoaded = true;
}

function extractVideoId(src: string): string | null {
  const match = src.match(/\/embed\/([^?]+)/);
  return match ? match[1] : null;
}

function trackEvent(
  eventName: string,
  videoId: string,
  videoTitle: string
): void {
  if (!window.posthog) return;

  window.posthog.capture(eventName, {
    video_id: videoId,
    video_title: videoTitle,
    video_platform: "youtube",
  });
}

function initializePlayer(iframe: HTMLIFrameElement): void {
  if (!window.YT || !window.YT.Player) return;

  const videoId = extractVideoId(iframe.src);
  if (!videoId) return;

  const videoTitle = iframe.title || "YouTube video";

  const player = new window.YT.Player(iframe, {
    events: {
      onStateChange: (event: { data: number }) => {
        if (!window.YT) return;

        if (event.data === window.YT.PlayerState.PLAYING) {
          trackEvent(TRACKED_EVENTS.PLAY, videoId, videoTitle);
        } else if (event.data === window.YT.PlayerState.PAUSED) {
          trackEvent(TRACKED_EVENTS.PAUSE, videoId, videoTitle);
        } else if (event.data === window.YT.PlayerState.ENDED) {
          trackEvent(TRACKED_EVENTS.ENDED, videoId, videoTitle);
        }
      },
    },
  });

  players.set(iframe, player);
}

function enableAPIForIframes(): void {
  const iframes = document.querySelectorAll<HTMLIFrameElement>(
    'iframe[src*="youtube.com/embed"]'
  );

  iframes.forEach((iframe) => {
    if (!iframe.src.includes("enablejsapi=1")) {
      const separator = iframe.src.includes("?") ? "&" : "?";
      iframe.src = `${iframe.src}${separator}enablejsapi=1`;
    }
  });
}

function initializeTracking(): void {
  enableAPIForIframes();
  loadYouTubeAPI();

  window.onYouTubeIframeAPIReady = () => {
    const iframes = document.querySelectorAll<HTMLIFrameElement>(
      'iframe[src*="youtube.com/embed"]'
    );
    iframes.forEach((iframe) => initializePlayer(iframe));
  };
}

function cleanup(): void {
  players.forEach((player) => {
    if (player && typeof player === "object" && "destroy" in player) {
      (player as { destroy: () => void }).destroy();
    }
  });
  players.clear();
}

export function setupYouTubeTracking(): void {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeTracking);
  } else {
    initializeTracking();
  }

  window.addEventListener("beforeunload", cleanup);
}


