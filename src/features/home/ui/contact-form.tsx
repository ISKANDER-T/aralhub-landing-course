import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  Form,
} from "@/shared/ui/kit/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { useContactCreate } from "../model/use-contact-create";
import { cn } from "@/shared/lib/css";

const loginSchema = z.object({
  phone_number: z
    .string({
      required_error: "Номер телефона обязателен",
    })
    .regex(/^\d{9,15}$/, "Неверный формат номера телефона"),
  name: z.string({
    required_error: "Имя обязателен",
  }),
});

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { errorMessage, isPending, create } = useContactCreate();

  const onSubmit = form.handleSubmit(create);

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input
                  className={cn(
                    "rounded-[12px] px-5 py-[15px] border-[#1C1F1D66] border-[1px] text-[14px] text-[#1C1F1D]",
                  )}
                  placeholder="Atıńız"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input
                  className={cn(
                    "rounded-[12px] px-5 py-[15px] border-[#1C1F1D66] border-[1px] text-[14px] text-[#1C1F1D]",
                  )}
                  autoComplete={"off"}
                  placeholder="+998"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {errorMessage && (
          <p className="text-destructive text-sm">{errorMessage}</p>
        )}

        <button
          className={cn(
            "bg-[#168974] text-white rounded-[12px] py-[15px] mt-4",
          )}
          disabled={isPending}
          type="submit"
        >
          Jollaw
        </button>
      </form>
    </Form>
  );
}
