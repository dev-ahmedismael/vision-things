"use client";
import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import PublicIcon from "@mui/icons-material/Public";
import NavlinkWithMenu from "./NavlinkWithMenu";
import { usePathname } from "next/navigation";
import NavMenu from "./NavMenu";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setPages } from "@/store/pagesSlice";
import urlsList from "@/public/data/urlsList.json";

const Navbar = () => {
  const servicesPages = useSelector((state) => state.pages.pages);

  // Use router
  const path = usePathname();
  const dispatch = useDispatch();
  const url = urlsList.nav_elements;

  useEffect(() => {
    axios.get(url).then((res) => {
      dispatch(setPages(res.data));
    });
  }, []);

  // Handle language change
  const enUrl = path.replace("/ar", "/en");

  return (
    <nav>
      <Container>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          height={75}
          sx={{ direction: "rtl" }}
        >
          {/* Logo on large screen only*/}
          <Box display={{ xs: "none", sm: "none", md: "flex" }}>
            <Link href={"/"}>
              <Image
                src={"/images/logo.png"}
                alt="Logo"
                width={50}
                height={50}
              />
            </Link>
          </Box>

          {/* Pages on large screen only */}

          <Box
            display={{ xs: "none", sm: "none", md: "flex" }}
            sx={{ direction: "rtl" }}
          >
            <Box ml={2}>
              <Link href={"/ar"}>
                <Typography>الرئيسية</Typography>
              </Link>
            </Box>
            <Box ml={2}>
              <Link href={"/ar/about-us"}>
                <Typography>عن الشركة</Typography>
              </Link>
            </Box>
            {servicesPages.map((page) => (
              <Box
                key={page.id}
                ml={2}
                className={path === page.slug && "active-navlink"}
              >
                <NavlinkWithMenu title={page.title_ar} subPages={page.pages} />
              </Box>
            ))}

            <Link href={"/ar/contact-us"}>
              <Typography>اتصل بنا</Typography>
            </Link>
          </Box>

          {/* Language */}
          <Link href={enUrl}>
            <Box
              display={"flex"}
              alignItems={"center"}
              sx={{ cursor: "pointer" }}
            >
              <Typography ml={1}>EN</Typography> <PublicIcon />
            </Box>
          </Link>

          {/* Logo on small screen only*/}
          <Box display={{ xs: "flex", sm: "flex", md: "none" }}>
            <Link href={"/ar"}>
              <Image
                src={"/images/logo.png"}
                alt="Logo"
                width={50}
                height={50}
              />
            </Link>
          </Box>

          {/* Nav menu button on small screen only */}
          <Box display={{ xs: "block", sm: "block", md: "none" }}>
            <NavMenu pages={servicesPages} />
          </Box>
        </Box>
      </Container>
    </nav>
  );
};

export default Navbar;
