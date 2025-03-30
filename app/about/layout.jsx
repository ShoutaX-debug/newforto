import Footer from "@/components/Footer";

export const metadata = {
  title: "Sigit | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
