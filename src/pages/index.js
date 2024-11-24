import { Box, TextField } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>نام پروژه</title>
      </Head>
      <Box>به صفحه اصلی خوش آمدید</Box>
      <TextField id="outlined-basic" label="نام " variant="outlined" />
    </>
  );
}
