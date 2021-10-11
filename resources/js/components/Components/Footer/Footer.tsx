import React from "react";
import { Container, createTheme, Link, Typography } from "@mui/material";
import { Copyright as CopyrightIcon } from "@mui/icons-material";

const theme = createTheme();

const Footer = () => (
    <div data-testid="Footer">
        <Container>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    borderTopWidth: 1,
                    padding: theme.spacing(1),
                    paddingBottom: theme.spacing(4),
                }}
            >
                <div style={{ width: "30%" }}>
                    <Typography component="p" variant="body1" color="primary">
                        &copy; 2021
                    </Typography>
                </div>
                <div style={{ width: "70%" }}>
                    <Typography
                        component="p"
                        variant="body1"
                        align="right"
                        style={{ color: "#6C757D" }}
                        noWrap
                    >
                        Designed & Developed By{" "}
                        <Link
                            href="https://github.com/HeinKoZin"
                            underline="none"
                        >
                            Hein Ko Zin
                        </Link>
                    </Typography>
                </div>
            </div>
        </Container>
    </div>
);

export default Footer;
