import { Button, Notification, Tabs, rem } from "@mantine/core";
import { IconArrowRight, IconPhoto, IconSettings } from "@tabler/icons-react";
import React, { useRef, useState } from "react";
import ContactTab from "./ContactTab";
import SocialMedia from "./SocialMedia";
import emailjs from "@emailjs/browser";

function Box() {
  const iconStyle = { width: rem(12), height: rem(12) };
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [iserror, setIserror] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f622b8l",
        "template_11svqan",
        form.current,
        "rCUt5O0rwpAifdUbn"
      )
      .then(
        (result) => {
          setIsLoading(true);
          console.log(result.text);
        },
        (error) => {
          setIserror(true);
          console.log(error.text);
        }
      );
  };
  return (
    <div className="">
      <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div class="max-w-screen-xl m-0 sm:m-10  shadow sm:rounded-lg flex justify-center flex-1">
          <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-6">
            <div class="mt-12 flex flex-col ">
              <ContactTab />
              <div class="w-full flex-1 mt-8">
                <div class="my-12 border-b text-center">
                  <div class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium  transform translate-y-1/2">
                    <a href="/audio"> Or Send Message with e-mail</a>
                  </div>
                </div>

                <form class="mx-auto max-w-xs" ref={form} onSubmit={sendEmail}>
                  <input
                    class="w-full px-8 py-4 rounded-lg   border border-yellow-700 text-sm bg-gray-100"
                    type="text"
                    placeholder="Name"
                    name="user_name"
                  />
                  <input
                    class="w-full px-8 py-4 rounded-lg mt-2 border border-yellow-700 text-sm bg-none bg-gray-100"
                    type="email"
                    placeholder="email"
                    name="user_email"
                  />
                  <textarea
                    class="w-full px-8 py-4 rounded-lg mt-2 border border-yellow-700 text-sm  mb-4 bg-gray-100"
                    type="text"
                    name="message"
                    placeholder="send message"
                  />
                  {isLoading ? (
                    <div className="animate__animated animate__bounceInLeft">
                      <Notification
                        color="green"
                        title="your message successful"
                      >
                        We are thrilled to inform you that your email has been
                        successfully sent.
                      </Notification>
                    </div>
                  ) : (
                    ""
                  )}
                  {iserror ? (
                    <div className="animate__animated animate__bounceInLeft">
                      <Notification
                        color="red"
                        title="your message was not successful"
                      >
                        We are thrilled to inform you that your email has been
                        was not successfully sent.
                      </Notification>
                    </div>
                  ) : (
                    ""
                  )}
                  <Button
                    rightSection={<IconArrowRight size={14} />}
                    fullWidth
                    type="submit"
                    value="send"
                    color="rgba(209, 141, 6, 1)"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
          <div class="flex-1  text-center hidden lg:flex">
            <div
              class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              // style={{
              //   "background-image":
              //     "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
              // }}
            >
              <img src="./portfolio/png.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
