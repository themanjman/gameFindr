<script lang="ts">
	import { getEmblaContext } from "./context.js";
	import { cn } from "$lib/utils.js";

	let className: string | undefined | null = undefined;
	export { className as class };

	const { orientation } = getEmblaContext("<Carousel.Item/>");
</script>

<div
	role="group"
	aria-roledescription="slide"
	class={cn(
		"min-w-0 shrink-0 grow-0 basis-full",
		$orientation === "horizontal" ? "pl-4" : "pt-4",
		className
	)}
	data-embla-slide=""
	{...$$restProps}
>
	<slot />
</div>
