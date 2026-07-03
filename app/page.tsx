import Link from "next/link";
import {
  MdHome,
  MdInsertChartOutlined,
  MdOutlineInventory2,
  MdPersonOutline,
  MdReport,
  MdSettings,
} from "react-icons/md";

const features = [
  {
    title: "Smart Dashboard",
    description: "Track daily activity, categories, quick actions, and POS flow from one clear workspace.",
    href: "/home",
    icon: <MdHome aria-hidden="true" />,
  },
  {
    title: "Sales Control",
    description: "Review sales performance, scoreboards, dates, and live business movement in seconds.",
    href: "/sales",
    icon: <MdInsertChartOutlined aria-hidden="true" />,
  },
  {
    title: "Inventory",
    description: "Keep products, stock levels, pricing, and item details organized for fast decisions.",
    href: "/inventory",
    icon: <MdOutlineInventory2 aria-hidden="true" />,
  },
  {
    title: "Employees",
    description: "Manage your team data with an easy view that keeps daily operations moving.",
    href: "/employees",
    icon: <MdPersonOutline aria-hidden="true" />,
  },
  {
    title: "Reports",
    description: "Explore visual reports and charts that turn store data into useful insights.",
    href: "/reports",
    icon: <MdReport aria-hidden="true" />,
  },
  {
    title: "Settings",
    description: "Tune dashboard preferences, products, themes, and system setup from one place.",
    href: "/settings/dashboard",
    icon: <MdSettings aria-hidden="true" />,
  },
];

const stats = [
  { value: "6", label: "Core modules" },
  { value: "24/7", label: "Store visibility" },
  { value: "100%", label: "Responsive layout" },
];

export default function Page() {
  return (
    <main className="main-page">
      <section className="main-hero">
        <div className="main-hero__content">
          <span className="main-eyebrow">POS System Dashboard</span>
          <h1>Run sales, inventory, reports, and team work from one responsive dashboard.</h1>
          <p>
            A clean main page for the POS system with fast access to the features that matter most during daily store operations.
          </p>
          <div className="main-hero__actions">
            <Link href="/home" className="main-btn main-btn--primary">
              Open dashboard
            </Link>
            <Link href="/reports" className="main-btn main-btn--ghost">
              View reports
            </Link>
          </div>
        </div>

        <div className="main-hero__panel" aria-label="Dashboard highlights">
          {stats.map((stat) => (
            <div key={stat.label} className="main-stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="main-features" aria-label="Main POS features">
        {features.map((feature, index) => {
          return (
            <Link
              href={feature.href}
              className="feature-card"
              key={feature.title}
              style={{ animationDelay: `${index * 90}ms` }}>
              <span className="feature-card__icon">
                {feature.icon}
              </span>
              <span className="feature-card__body">
                <strong>{feature.title}</strong>
                <span>{feature.description}</span>
              </span>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
