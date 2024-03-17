import { Content } from "./Content";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";
export const Layout = () => {
  return (
    <>
      <div
        className="fixed inset-0 z-0 bg-opacity-50 bg-gray-100"
        style={{
          backdropFilter: "blur(var(--back-filter))",
          WebkitBackdropFilter: "blur(var(--back-filter))",
          zIndex: "-99999999",
          backgroundColor: "var(--back-filter-color)",
        }}
      ></div>
      <main className="mx-auto flex justify-center">
        <section className="relative flex w-full max-w-[1150px] flex-row">
          <Sidebar />
          <Content />
        </section>
        <Footer />
      </main>
    </>
  );
};
