import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <div className="md:p-5 lg:p-[50px] w-screen h-screen">
      <span className="absolute top-[15px] opacity-40 hidden md:block left-1/2 -translate-x-1/2 font-semibold lowercase">Typing Speed Game</span>
      <main className="bg-gradient-to-l grid from-[#3E0040] to-[rgba(62,0,64,0.54)] w-full h-full p-3 md:p-[30px] lg:p-[64px] md:rounded-[50px]">
        {children}
      </main>
    </div>
  );
};

export default Layout;
