// components/NavBar.tsx
import NavLink from "./NavLink";

interface NavBarProps {
  data: {
    href: string;
    label: string;
    icon: string;
    subLinks?: {
      id: string;
      href: string;
      icon: string;
      label: string;
    }[];
  }[];
}

const NavBar: React.FC<NavBarProps> = ({ data }) => {
  return (
    <nav className="bg-gray-800">
      <ul className="flex space-x-4">
        {data.map((item) => (
          <NavLink key={item.label} {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
