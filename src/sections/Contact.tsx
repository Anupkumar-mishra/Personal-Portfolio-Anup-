"use client";

import { useState } from "react";

import {
  useForm,
} from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<FormData>();

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  async function onSubmit(
    data: FormData
  ) {
    try {
      setLoading(true);

      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setSuccess(true);
        reset();
      }

    } catch (error) {
      console.error(error);

    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="section-spacing"
    >
      <div className="container-custom">

        <div
          className="
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur
          "
        >

          <div
            className="
              grid
              lg:grid-cols-2
            "
          >

            {/* Left */}
            <div className="p-10 sm:p-14">

              <div
                className="
                  mb-4
                  text-sm
                  uppercase
                  tracking-[0.2em]
                  text-teal-400
                "
              >
                Contact
              </div>

              <h2
                className="
                  text-4xl
                  font-bold
                  tracking-tight
                  sm:text-5xl
                "
                style={{
                  fontFamily:
                    "var(--font-space)",
                }}
              >
                Let&apos;s work together.
              </h2>

              <p
                className="
                  mt-6
                  max-w-lg
                  text-zinc-400
                  leading-8
                "
              >
                Open for internships,
                freelance projects and
                collaborations.
              </p>

            </div>

            {/* Right */}
            <div
              className="
                border-t
                border-white/10
                p-10
                sm:p-14
                lg:border-l
                lg:border-t-0
              "
            >

              <form
                onSubmit={handleSubmit(
                  onSubmit
                )}
                className="space-y-6"
              >

                <input
                  {...register("name")}
                  placeholder="Your name"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/20
                    px-5
                    py-4
                    outline-none
                    placeholder:text-zinc-600
                  "
                />

                <input
                  {...register("email")}
                  type="email"
                  placeholder="Your email"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/20
                    px-5
                    py-4
                    outline-none
                    placeholder:text-zinc-600
                  "
                />

                <textarea
                  {...register("message")}
                  rows={6}
                  placeholder="Your message"
                  className="
                    w-full
                    resize-none
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/20
                    px-5
                    py-4
                    outline-none
                    placeholder:text-zinc-600
                  "
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full
                    rounded-2xl
                    bg-teal-500
                    px-6
                    py-4
                    font-medium
                    text-black
                    transition
                    hover:bg-teal-400
                  "
                >
                  {loading
                    ? "Sending..."
                    : "Send Message"}
                </button>

                {success && (
                  <p
                    className="
                      text-sm
                      text-green-400
                    "
                  >
                    Message sent successfully.
                  </p>
                )}

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}