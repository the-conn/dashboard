function generateHex(length: number): string {
  return Array.from({ length }, () => Math.floor(Math.random() * 16).toString(16)).join('');
}

// Stable trace ID for the lifetime of this browser session module load
export const SESSION_TRACE_ID = generateHex(32);

export function makeTraceparent(): string {
  return `00-${SESSION_TRACE_ID}-${generateHex(16)}-01`;
}
