import { Button, List, ListItem, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Form from "../components/Form";
import NextLink from "next/link";
import Link from "next/link";
function LoginScreen() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ email, password }) => {};
  return (
    <div title="Login">
      <Form onSubmit={handleSubmit(submitHandler)}>
        <Typography component="h4" variant="h4">
          Đăng Nhập
        </Typography>
        <List>
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
                        ? "Password length is more than 5"
                        : "Password is required"
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
              Đăng Nhập
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

export default LoginScreen;
