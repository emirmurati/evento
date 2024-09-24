import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo-no-background.png"
        alt="EVENTO logo"
        width={100}
        height={12}
      />
    </Link>
  );
}
