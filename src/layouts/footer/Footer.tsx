import { Stack } from "@mui/material";
import { t } from "i18next";

export default function Footer() {
  return (
    <Stack flexWrap="wrap" direction="row" justifyContent="center">
      {t("global.copyright", { currentYear: 2023 })}
    </Stack>
  );
}
