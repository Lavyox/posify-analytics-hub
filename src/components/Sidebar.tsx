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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

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
      <SidebarContent className="flex flex-col justify-between">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={location.pathname === item.path ? "bg-secondary" : ""}
                    tooltip={item.title}
                  >
                    <Link to={item.path} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4 shrink-0" />
                      <span className="truncate transition-opacity duration-200 group-data-[collapsible=icon]:opacity-0">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* User Profile Section */}
        <div className="mt-auto border-t border-border p-4">
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex w-full items-center gap-3 rounded-lg p-2 hover:bg-secondary">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start transition-opacity duration-200 group-data-[collapsible=icon]:opacity-0">
                  <span className="text-sm font-medium">John Doe</span>
                  <span className="text-xs text-muted-foreground">john@example.com</span>
                </div>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-56" align="start" side="right">
              <div className="space-y-3">
                <div className="border-b border-border pb-3">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">john@example.com</p>
                </div>
                <div className="space-y-1">
                  <Link
                    to="/profile"
                    className="block w-full rounded-md p-2 text-sm hover:bg-secondary"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block w-full rounded-md p-2 text-sm hover:bg-secondary"
                  >
                    Settings
                  </Link>
                  <button
                    onClick={() => console.log('Logout clicked')}
                    className="block w-full rounded-md p-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950"
                  >
                    Log out
                  </button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </SidebarContent>
    </SidebarComponent>
  );
}