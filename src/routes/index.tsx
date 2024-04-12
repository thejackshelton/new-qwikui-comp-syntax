import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Select } from "~/components";
import styles from "~/components/select/select-example.css?inline";

export default component$(() => {
  useStyles$(styles);

  // Not sure why Qwik core is woken up on page load here in Qwik City, this problem does not happen in Astro. (executes on interaction)

  // If I had to guess, it's likely a bug in the Qwik City service worker or Qwik City. We need to deprecate the Qwik City service worker with the one in core.

  // Run the preview and interact with the listbox and click an option. Write down the total JS executed. Then remove the Listbox and Option, and click the trigger again.

  return (
    <Select.Root class="select">
      <Select.Trigger class="select-trigger">
        <Select.Value placeholder="Select an option" />
      </Select.Trigger>
      <Select.Listbox class="select-listbox">
        <Select.Option>Option 1</Select.Option>
        <Select.Option>Option 2</Select.Option>
      </Select.Listbox>
    </Select.Root>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
