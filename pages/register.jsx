import { Button, List, ListItem, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Form from "../components/Form";
import NextLink from "next/link";
import Link from "next/link";
import { useSnackbar } from "notistack";
import jsCookie from "js-cookie";
import { useRouter } from "next/router";
import { useContext } from "react";
import getStripe from "../lib/getStripe";
function registerScreen() {
  // const {state,dispatch} = useContext(getStripe)
  // const {userInfo}=state;
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const { redirect } = router.query;

  // useEffect(() => {
  //   if (userInfo) {
  //     router.push("/");
  //   }
  // }, [router]);
  const  enqueueSnackbar  = useSnackbar();
  const submitHandler = async ({ name, email, password, confirmPassword }) => {
    if (password !== confirmPassword) {
      enqueueSnackbar("Mật khẩu không khớp", { variant: "error" });
      return;
    }
    try {
      const { data } = await axios.post("/api/users/register", {
        name,
        email,
        password,
      });
      dispatch({ type: "USER_LOGIN", stripe: data });
    } catch (err) {
      enqueueSnackbar(err.message, { variant: "error" });
      jsCookie.set("userInfo", JSON.stringify(data));
      router.push("/");
    }
  };
  return (
    <div title="register">
      <Form onSubmit={handleSubmit(submitHandler)}>
        <Typography component="h4" variant="h4">
          Đăng Ký
        </Typography>
        <List>
          <ListItem>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="name"
                  label="Name"
                  inputProps={{ type: "name" }}
                  error={Boolean(errors.name)}
                  helperText={
                    errors.name
                      ? errors.name.type === "minLength"
                        ? "Tên dài hơn 1 ký tự"
                        : "Tên Không được bỏ trống"
                      : ""
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Email"
                  inputProps={{ type: "email" }}
                  error={Boolean(errors.email)}
                  helperText={
                    errors.email
                      ? errors.email.type === "pattern"
                        ? "Email is not valid"
                        : "Email is required"
                      : ""
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>

          <ListItem>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 6,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="password"
                  label="Password"
                  inputProps={{ type: "password" }}
                  error={Boolean(errors.password)}
                  helperText={
                    errors.password
                      ? errors.password.type === "minLength"
                        ? "Password dài hơn 5 kí tự"
                        : "Password Không được bỏ trống"
                      : ""
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 6,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="confirmPassword"
                  label="Confirm Password"
                  inputProps={{ type: "password" }}
                  error={Boolean(errors.confirmPassword)}
                  helperText={
                    errors.confirmPassword
                      ? errors.confirmPassword.type === "minLength"
                        ? "confirmPassword dài hơn 5 kí tự"
                        : "confirmPassword Không được bỏ trống"
                      : ""
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              style={{ backgroundColor: "black" }}
            >
              Đăng Ký
            </Button>
          </ListItem>
          <ListItem tyle={{ color: "red" }}>
            Bạn Không có tài khoản?{" "}
            <NextLink href={"/register"} passHref s>
              <Link>Đăng Ký</Link>
            </NextLink>
          </ListItem>
        </List>
      </Form>
    </div>
  );
}

export default registerScreen;
