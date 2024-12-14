import { BarChart, Home, Settings, ShoppingCart } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", icon: Home, path: "/dashboard" },
  { title: "Sales", icon: ShoppingCart, path: "/sales" },
  { title: "Reports", icon: BarChart, path: "/reports" },
  { title: "Settings", icon: Settings, path: "/settings" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <SidebarComponent>
      <div className="flex h-16 items-center px-4">
        <SidebarTrigger />
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={location.pathname === item.path ? "bg-secondary" : ""}
                  >
                    <Link to={item.path}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </SidebarComponent>
  );
}