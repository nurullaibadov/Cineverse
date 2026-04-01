import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { LayoutDashboard, Users, Film, BarChart3, Settings, Menu, X, LogOut } from "lucide-react";
import { Navbar } from "@/components/Navbar";

const tabs = [
  { id: "dashboard", icon: LayoutDashboard, labelKey: "admin.dashboard" },
  { id: "users", icon: Users, labelKey: "admin.users" },
  { id: "content", icon: Film, labelKey: "admin.content" },
  { id: "analytics", icon: BarChart3, labelKey: "admin.analytics" },
  { id: "settings", icon: Settings, labelKey: "admin.settings" },
];

const stats = [
  { label: "Total Users", value: "24,512", change: "+12%" },
  { label: "Active Films", value: "1,847", change: "+5%" },
  { label: "Daily Views", value: "98.3K", change: "+22%" },
  { label: "Revenue", value: "$45.2K", change: "+8%" },
];

export default function AdminPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className={`fixed md:sticky top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-card border-r border-border z-40 transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
          <div className="p-4 flex flex-col h-full">
            <h3 className="font-display text-xl text-foreground mb-6">Admin Panel</h3>
            <nav className="flex-1 space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setSidebarOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "cinema-gradient text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {t(tab.labelKey)}
                </button>
              ))}
            </nav>
            <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </aside>

        {/* Mobile toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="fixed bottom-4 right-4 z-50 md:hidden p-3 rounded-full cinema-gradient text-primary-foreground shadow-lg"
        >
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 min-h-[calc(100vh-4rem)]">
          {activeTab === "dashboard" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="font-display text-3xl text-foreground mb-6">{t("admin.dashboard")}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-card border border-border rounded-xl p-5 card-cinema">
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                    <span className="text-xs text-primary font-medium">{stat.change}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-xl p-6 card-cinema">
                  <h3 className="font-display text-xl text-foreground mb-4">Recent Activity</h3>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center gap-3 py-3 border-b border-border last:border-0">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground text-xs">U{i}</div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground">User {i} watched "Film Title"</p>
                        <p className="text-xs text-muted-foreground">{i}h ago</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-card border border-border rounded-xl p-6 card-cinema">
                  <h3 className="font-display text-xl text-foreground mb-4">Top Films</h3>
                  {["The Midnight Protocol", "Echoes of Tomorrow", "Neon Requiem", "Golden Age", "Crimson Horizon"].map((film, i) => (
                    <div key={film} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <div className="flex items-center gap-3">
                        <span className="text-primary font-bold text-sm">#{i + 1}</span>
                        <span className="text-sm text-foreground">{film}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{Math.floor(Math.random() * 50 + 10)}K views</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
          {activeTab === "users" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="font-display text-3xl text-foreground mb-6">{t("admin.users")}</h2>
              <div className="bg-card border border-border rounded-xl overflow-hidden card-cinema">
                <table className="w-full">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Name</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground hidden md:table-cell">Email</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Role</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {["Alice Johnson", "Bob Smith", "Clara Davis", "Daniel Lee", "Eva Martinez"].map((name, i) => (
                      <tr key={name} className="border-t border-border">
                        <td className="p-4 text-sm text-foreground">{name}</td>
                        <td className="p-4 text-sm text-muted-foreground hidden md:table-cell">{name.toLowerCase().replace(" ", ".")}@email.com</td>
                        <td className="p-4"><span className={`px-2 py-1 rounded-full text-xs font-medium ${i === 0 ? "cinema-gradient text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>{i === 0 ? "Admin" : "User"}</span></td>
                        <td className="p-4"><span className="w-2 h-2 rounded-full bg-green-500 inline-block mr-2" />Active</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
          {activeTab !== "dashboard" && activeTab !== "users" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center h-64">
              <p className="text-muted-foreground text-lg">{t(`admin.${activeTab}`)} - Coming soon</p>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}
