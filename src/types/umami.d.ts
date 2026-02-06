interface UmamiTracker {
  track(event: string, data?: Record<string, string | number>): void;
  track(callback: (props: { website: string; hostname: string; language: string; referrer: string; screen: string; title: string; url: string }) => {
    website: string;
    hostname: string;
    language: string;
    referrer: string;
    screen: string;
    title: string;
    url: string;
    name?: string;
    data?: Record<string, string | number>;
  }): void;
}

interface Window {
  umami?: UmamiTracker;
}
