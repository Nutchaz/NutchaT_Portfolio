import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";

function Form({ className, ...props }: ComponentProps<"form">) {
  return (
    <form
      data-slot="form"
      className={cn("flex flex-col gap-6", className)}
      {...props}
    />
  );
}

export {
  Form,
  Field as FormField,
  FieldLabel as FormLabel,
  FieldDescription as FormDescription,
  FieldError as FormMessage,
  FieldGroup as FormGroup,
  FieldSet as FormSet,
};
