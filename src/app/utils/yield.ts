// utils/yield.ts

// Define the scheduler type
interface Scheduler {
  yield: () => Promise<void>;
}

// Extend globalThis to safely include scheduler
declare global {
  interface Window {
    scheduler?: Scheduler;
  }
}

// Yield function that doesn't use `any`
export async function yieldToMain() {
  const scheduler =
    typeof window !== "undefined" ? window.scheduler : undefined;

  if (scheduler?.yield) {
    await scheduler.yield();
  } else {
    await new Promise((res) => setTimeout(res, 0));
  }
}
