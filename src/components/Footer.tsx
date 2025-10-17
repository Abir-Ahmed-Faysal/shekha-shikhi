import { Link } from "react-router";

const Footer = () => {
  return (
    <footer
      id="pricing"
      className="mt-12 border-t pt-8 pb-20 text-sm text-gray-600"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <div className="text-lg font-bold">
            <Link to={"/"}>
              <img
                src="https://i.ibb.co/TMCkP53J/image.png"
                alt="শেখাশিখি"
                className="h-12 md:h-14 w-auto"
              />
            </Link>
          </div>
          <div className="mt-2 text-gray-500">
            শিক্ষাকে সহজ ও মজাদার করে তোলা আমাদের লক্ষ্য।
          </div>
        </div>

        <div>
          <div className="font-semibold">রিসোর্স</div>
          <ul className="mt-2 space-y-2">
            <li>
              <a className="hover:text-indigo-600" href="#">
                ব্লগ
              </a>
            </li>
            <li>
              <a className="hover:text-indigo-600" href="#">
                সাহায্য কেন্দ্র
              </a>
            </li>
            <li>
              <a className="hover:text-indigo-600" href="#">
                শর্তাবলী
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-semibold">যোগাযোগ</div>
          <div className="mt-2">support@shikho-demo.test</div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} ShikhoDemo — সকল অধিকার সংরক্ষিত।
      </div>
    </footer>
  );
};

export default Footer;
