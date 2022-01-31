import Profile from "../assets/profile-1.jpg";

interface AvatarProps {
  width?: string | number | undefined;
  height?: string | number | undefined;
  className?: string;
}
export default function Avatar({ width, height, className }: AvatarProps) {
  return (
    <figure className={`w-64 h-[18rem] relative border-2 border-slate-900 dark:border-slate-50 ${className ?? ''}`}>
      <span
        aria-label="Photo of Samuel"
        role="img"
        className="block h-full w-full -mt-6 -ml-5"
        style={{
          background: `url(${Profile})`,
          backgroundSize: "cover",
        }}
      ></span>
    </figure>
  );
}
