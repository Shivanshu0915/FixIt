import {useState, useEffect} from 'react'

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsOpen(window.innerWidth >= 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div>
      {/* Hamburger icon */}
      <button className="md:hidden fixed top-20 left-4 z-50 p-2 rounded-md bg-white shadow-lg" onClick={() => setIsOpen(!isOpen)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`${isOpen ? "translate-x-0" : "-translate-x-full"} transform fixed md:relative md:translate-x-0 z-40 w-72 h-[90vh] bg-white shadow-lg transition-transform duration-300 ease-in-out`}>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Menu</h2>
          {/* <nav> */}
            {/* <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 p-3 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul> */}
          {/* </nav> */}
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}