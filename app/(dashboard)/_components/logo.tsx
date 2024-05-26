import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      height={130}
      width={130}
      alt="logo"
      src="/public/main_logo_educlic.png"
    />
  )
}