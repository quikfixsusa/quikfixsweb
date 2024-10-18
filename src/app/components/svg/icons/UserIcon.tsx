export default function UserIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 12C15.3137 12 18 9.31371 18 6C18 2.68629 15.3137 0 12 0C8.68629 0 6 2.68629 6 6C6 9.31371 8.68629 12 12 12Z"
        fill={color}
      />
      <path
        d="M12 13.9991C7.03172 14.0046 3.00553 18.0308 3 22.9991C3 23.5514 3.4477 23.9991 3.99998 23.9991H20C20.5522 23.9991 21 23.5514 21 22.9991C20.9945 18.0308 16.9683 14.0046 12 13.9991Z"
        fill={color}
      />
    </svg>
  );
}
