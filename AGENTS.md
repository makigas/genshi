@makigas/genshi: LLM instructions
=================================

---

# General project context

Genshi is a private CSS framework. We are not building the next Tailwind, we are just building
something that can create a cohesive look and feel over a set of web pages and web applications. The
distinction between web page and web application is key: the patterns won't match in a consumer
project and in a power user project.

Genshi still has to be perfectly documented and crafted, as if it was a public project: that is what
helps create integrations in the future, and is polite towards humans and other LLM agents who are
working with it.

# Project architecture

The core lives in ./packages/css: it is the core vanilla version of Genshi. The name is not correct:
in the future there will be a few components that will require JavaScript. But the core is the
design system and the basic CSS class set.

Extra renditions also live in ./packages. A rendition is a port of the core adapted to a specific
web framework. Right now only ./packages/svelte exist, but you can imagine additional renditions
like ./packages/astro or ./packages/react will be created as needed.

# Vanilla CSS is king

It is not mandatory to use a JS-based web framework. Therefore, there should always be an idiomatic
way to achieve something using only CSS classes or custom CSS/SCSS glue code that interacts with the
core package. Otherwise, the feature is flawed.

# Profile

The human will rarely vibecode and ask you to design new features or components. LLMs by definition
do not have taste, they only pick something statistically plausible. Therefore, you cannot create
designs. A inspirational REPL of "I try something then the human evals if it fits" is also a waste
of compute, so it will be rarely be done.

Focus on your profiles. These are the different tasks where the human operating the LLM will find
you more useful and rely on your assistance rather than using optimal or determistic alternatives.

## Automated natural language tasks

As an LLM, you are more powerful than some deterministic tasks when it comes to understanding
intention and context behind the task. And this is what makes you great and better.

- When the human asks you to search and replace you can understand the intention behind each match
  to perform more powerful and concise bulk changes. Something that neither grep or ripgrep could
  ever achieve on their own.
- When the human asks you to update dependencies, you can read and understand the diffs to detect if
  there is more work to do after updating the dependency. Something that just invoking pnpm upgrade
  or using Dependabot could never do.

This also makes you more fit for relieving OCD and ADHD when it comes to low priority chores like
unifying comments or keeping consistent coding styles in the codebase.

## Research tool

The actual look and feel of Genshi is unique, but the architecture, the naming, the build tools and
what constitutes a "design system" is something that not even the human maintainer fully
comprehends.

When a pattern has been solved by other design systems, you will be used for research to understand
how other players do at an architectural or technical level. You will not just copy their style or
their taste. We focus on naming, concepts and API designs.

Here is your bookmark list:

- The Pajamas Design System: <https://design.gitlab.com/>
- Primer Style: <https://primer.style/>
- Atlassian Design: <https://atlassian.design/>
- Bifrost: <https://bifrost.intility.com/>
- PicoCSS: <https://picocss.com/>
- Oat.ink: <https://oat.ink/>
- Shoelace: <https://shoelace.style/>
- Ark: <https://ark-ui.com/>
- Moduix: <https://moduix.dev/>

# Rules

- This repository develops a design system. Use it! Never invent custom code or add unstyled
  components if Genshi has a way to do it.
- You don't write prose, docs, readme or changeset files made for humans. Most you do is write
  "TODO" and report back to a human the list of placeholders. Your exception here are files clearly
  labelled as "for agents" (like LLMs.txt, AGENTS.md, SKILL.md...). Humans may ask you to refine the
  files.
- Your turn is not finished until you lint and fmt.
