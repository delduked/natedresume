<script lang="ts">
  import { map } from "./../../.routify/route-map.js";
  import {
    Timeline,
    TimelineItem,
    Button,
    Card,
    Avatar,
    Img,
    Heading,
    P,
    Footer,
    FooterBrand,
    FooterLink,
    FooterLinkGroup,
    FooterCopyright,
    FooterIcon,
    A
  } from "flowbite-svelte";
  import {
    ArrowRightOutline,
    ArrowUpRightFromSquareOutline,
    ChevronRightOutline,
    DiscordSolid,
    FacebookSolid,
    GithubSolid,
    TwitterSolid
  } from "flowbite-svelte-icons";
  import { AccordionItem, Accordion } from "flowbite-svelte";
  import { CalendarWeekSolid } from "flowbite-svelte-icons";
  import { onMount } from "svelte";

  let name, description, html_url;

  const httpClient = async (
    url,
    name
  ): Promise<{ name: string; description: string; html_url: string }> => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      const res = data.find((item) => item.name === name) as {
        name: string;
        description: string;
        html_url: string;
      };
      return {
        name: res.name,
        description: res.description,
        html_url: res.html_url
      };
    } catch (error) {
      console.log(error);
    }
  };
  onMount(async () => {
    const res = await httpClient(
      "https://api.github.com/users/delduked/repos",
      "boluswizard"
    );
    name = res.name;
    description = res.description;
    html_url = res.html_url;
    console.log(res);
  });
</script>

<main>
  <Img
    src="https://avatars.githubusercontent.com/u/92732195?v=4"
    alt="sample 1"
    size="w-72"
    imgClass="h-72"
    class="rounded-full m-4 p-4"
  />
  <div style="width: 100%; display: flex; justify-content: center;" class="p-4">
    <svg
      class="m-2"
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      ><path
        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
      /></svg
    >
    <svg
      class="m-2"
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      ><path
        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
      /></svg
    >
  </div>
  <div class="text-center">
    <Heading
      tag="h1"
      class="mb-4 text-white"
      customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
      >Nate Del Duca</Heading
    >
    <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 text-white"
      >Full stack developer and devops analyst</P
    >
  </div>

  <P class="m-4 text-white text-center"
    >Start developing with an open-source library of over 450+ UI components,
    sections, and pages built with the utility classes from Tailwind CSS and
    designed in Figma. Deliver great service experiences fast - without the complexity of
    traditional ITSM solutions. Accelerate critical development work, eliminate
    toil, and deploy changes with ease. Deliver great service experiences fast - without the complexity of
    traditional ITSM solutions. Accelerate critical development work, eliminate
    toil, and deploy changes with ease.</P
  >

  <div class="grid-container">
    <div class="grid-item">
      <div class="grid-item-content">
        <Card href="/cards" class="text-left">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {name}
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
            {description}
          </p>
          <a
            rel="external"
            href={html_url}
            class="inline-flex items-center text-primary-600 hover:underline"
          >
            Go to {name}
            <ArrowUpRightFromSquareOutline class="w-4 h-4 ms-2.5" />
          </a>
        </Card>
      </div>
    </div>
    <div class="grid-item">
      <div class="grid-item-content">
        <Card href="/cards" class="text-left">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {name}
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
            {description}
          </p>
          <a
            rel="external"
            href={html_url}
            class="inline-flex items-center text-primary-600 hover:underline"
          >
            Go to {name}
            <ArrowUpRightFromSquareOutline class="w-4 h-4 ms-2.5" />
          </a>
        </Card>
      </div>
    </div>
    <div class="grid-item">
      <div class="grid-item-content">
        <Card href="/cards" class="text-left">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {name}
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
            {description}
          </p>
          <a
            rel="external"
            href={html_url}
            class="inline-flex items-center text-primary-600 hover:underline"
          >
            Go to {name}
            <ArrowUpRightFromSquareOutline class="w-4 h-4 ms-2.5" />
          </a>
        </Card>
      </div>
    </div>
    <div class="grid-item">
      <div class="grid-item-content">
        <Card href="/cards" class="text-left">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {name}
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
            {description}
          </p>
          <a
            rel="external"
            href={html_url}
            class="inline-flex items-center text-primary-600 hover:underline"
          >
            Go to {name}
            <ArrowUpRightFromSquareOutline class="w-4 h-4 ms-2.5" />
          </a>
        </Card>
      </div>
    </div>
  </div>

  <Timeline class=" text-left m-4">
    <TimelineItem
      class="p-7"
      title="Application UI code in Tailwind CSS"
      date="February 2022"
    >
      <p
        class="mb-4 text-left text-base font-normal text-gray-500 dark:text-gray-400"
      >
        Get access to over 20+ pages including a dashboard layout, charts,
        kanban board, calendar, and pre-order E-commerce & Marketing pages.
      </p>
    </TimelineItem>
    <TimelineItem
      class="p-7"
      title="Application UI code in Tailwind CSS"
      date="March 2022"
    >
      <p
        class="text-base text-left font-normal text-gray-500 dark:text-gray-400"
      >
        All of the pages and components are first designed in Figma and we keep
        a parity between the two versions even as we update the project.
      </p>
    </TimelineItem>
    <TimelineItem
      class="p-7"
      title="Application UI code in Tailwind CSS"
      date="April 2022"
    >
      <p
        class="text-base text-left font-normal text-gray-500 dark:text-gray-400"
      >
        Get started with dozens of web components and interactive elements built
        on top of Tailwind CSS.
      </p>
    </TimelineItem>
    <TimelineItem
      class="p-7"
      title="Application UI code in Tailwind CSS"
      date="April 2022"
    >
      <p
        class="text-base text-left font-normal text-gray-500 dark:text-gray-400"
      >
        Get started with dozens of web components and interactive elements built
        on top of Tailwind CSS.
      </p>
    </TimelineItem>
    <TimelineItem
      class="p-7"
      title="Application UI code in Tailwind CSS"
      date="April 2022"
    >
      <p
        class="text-base text-left font-normal text-gray-500 dark:text-gray-400"
      >
        Get started with dozens of web components and interactive elements built
        on top of Tailwind CSS.
      </p>
    </TimelineItem>
  </Timeline>

  <Footer footerType="socialmedia" class="w-full ml-2 mr-2">
    <div class="md:flex md:justify-between">
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
          >
            Resources
          </h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-4" href="/">Flowbite</FooterLink>
            <FooterLink liClass="mb-4" href="/">Tailwind CSS</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white"
          >
            Legal
          </h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-4" href="/">Privacy Policy</FooterLink>
            <FooterLink liClass="mb-4" href="/">Terms & Conditions</FooterLink>
          </FooterLinkGroup>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <FooterCopyright href="/" by="Flowbite™" />
      <div
        class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center sm:mt-0"
      >
        <FooterIcon href="/">
          <FacebookSolid
            class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
          />
        </FooterIcon>
      </div>
    </div>
  </Footer>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    font-family: Arial, sans-serif;
    min-width: 320px;
    max-width: 640px;
    flex-wrap: wrap;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    width: 100%;
    margin: 1em;
  }

  .grid-item {
    position: relative;
  }

  .grid-item-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 600px) {
    .grid-container {
      display: flex;
      flex-direction: column;
    }
  }
</style>
