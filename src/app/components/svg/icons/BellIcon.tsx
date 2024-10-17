export default function BellIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.42401 21C7.81167 21.8914 8.45124 22.6502 9.26416 23.1831C10.0771 23.716 11.028 23.9999 12 23.9999C12.9721 23.9999 13.9229 23.716 14.7359 23.1831C15.5488 22.6502 16.1884 21.8914 16.576 21H7.42401Z"
        fill={color}
      />
      <path
        d="M22.3921 12.5491L20.6561 6.82605C20.1001 4.8244 18.8914 3.06583 17.2219 1.82955C15.5524 0.593281 13.5177 -0.0498305 11.441 0.00232993C9.3642 0.0544903 7.36438 0.798932 5.75902 2.11746C4.15367 3.43598 3.03479 5.25301 2.58005 7.28005L1.23205 12.8171C1.05289 13.5528 1.04318 14.3196 1.20366 15.0597C1.36415 15.7998 1.69063 16.4937 2.15847 17.0891C2.62632 17.6846 3.2233 18.166 3.90437 18.497C4.58544 18.828 5.3328 19 6.09005 19.0001H17.6071C18.3878 19.0001 19.1577 18.8173 19.8551 18.4663C20.5525 18.1153 21.158 17.6059 21.6231 16.9788C22.0882 16.3517 22.4 15.6245 22.5335 14.8552C22.6671 14.086 22.6186 13.2962 22.3921 12.5491Z"
        fill={color}
      />
    </svg>
  );
}
