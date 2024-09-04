import { useState } from "react"
import { AlignLeft, XIcon } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { links } from "@/utils"
import { NavLink } from "react-router-dom"
import { Button } from "../ui/button"

function LinksDropdown() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <DropdownMenu onOpenChange={setIsMenuOpen}>
      <DropdownMenuTrigger asChild className="lg:hidden">
        <Button variant="outline" size="icon">
          {isMenuOpen ? <XIcon /> : <AlignLeft />}
          <span className="sr-only">Toggle Links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-52 lg:hidden"
        align="start"
        sideOffset={25}
      >
        {
          links.map((link)=> {
            return <DropdownMenuItem key={link.label}>
                <NavLink
                  to={link.href}
                  className={({isActive})=> {
                    return `capitalize w-full hover:ml-2 ${isActive? 'text-primary' : ''}`
                  }}
                >
                  {link.label}
                </NavLink>
            </DropdownMenuItem>
          })
        }

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default LinksDropdown