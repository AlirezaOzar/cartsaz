import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Layout = ({ children }) => {
    return (
        <div dir="rtl">
            <Navbar />
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;