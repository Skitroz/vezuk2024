"use client";

import * as React from "react";
import Link from "next/link";
import Logo from "../../public/logo.png";
import Banner from "../../public/banner.png";
import { User, Search } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Nos équipes",
    href: "/nos-equipes",
    description:
      "Découvrez les équipes de VeZuK, leurs membres et leurs projets",
  },
  {
    title: "Nos matchs",
    href: "/nos-matchs",
    description:
      "Consultez les matchs à venir, les matchs passés et les matchs en cours",
  },
  {
    title: "Nos résultats",
    href: "/nos-resultats",
    description:
      "Retrouvez les résultats de nos équipes, les classements et les statistiques",
  },
];

export function Header() {
  return (
    <>
      <div>
        <h2 className="text-center bg-red-600 uppercase text-white py-3 text-xs font-mono tracking-widest font-bold">
          On recrute,{" "}
          <Link className="underline" href="/contact">
            contactez nous !
          </Link>
        </h2>
      </div>
      <div className="bg-black flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-10">
          <div>
            <Link href="/" passHref>
              <Image src={Logo} alt="Logo de la structure VeZuK" width={60} />
            </Link>
          </div>
          <div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>VeZuK</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                            <Image
                              src={Logo}
                              alt="Logo de la structure VeZuK"
                              width={100}
                            />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              VeZuK
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Équipe CS2 créée depuis 2020
                            </p>
                          </div>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/a-propos" title="À propos">
                        En savoir plus
                      </ListItem>
                      <ListItem href="/nos-partenaires" title="Nos partenaires">
                        Voir la liste de nos partenaires
                      </ListItem>
                      <ListItem href="/nos-membres" title="Nos membres">
                        Découvrez nos membres
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Équipe</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="text-white flex gap-2 items-center">
          <a href="/connexion">
            <User />
          </a>
          <button>
            <Search />
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-1 z-10 bg-red-600"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 z-10 bg-red-600"></div>
        <div className="bg-gradient-to-br from-accent to-accent-foreground">
          <Image
            src={Banner}
            alt="Bannière de la structure VeZuK"
            className="brightness-50"
          />
        </div>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
