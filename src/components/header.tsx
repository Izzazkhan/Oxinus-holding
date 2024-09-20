"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/comments",
    label: "comments",
  },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header>
      <nav>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <ul className="flex gap-x-5 text-[14px]">
            {navLinks.map((link) => (
                <li key={link.href}>
                <Link
                    className={`${
                    pathname === link.href ? "text-zinc-900" : "text-zinc-400"
                    }`}
                    href={link.href}
                >
                    {link.label}
                </Link>
                </li>
            ))}
            </ul>
            </Typography>
            <Button color="inherit">Test</Button>
        </Toolbar>
        </AppBar>
        </Box>
      </nav>
    </header>
  );
}