---
name: create-instructions
agent: instructions-generator
description: Use this prompt to generate specific agent instruction files for the /docs directory.
---
Take the information below and generate an agent instructions .md file for it in the /docs directory.  If a .md filename is provided, use that, otherwise generate an appropriate filename based on the generated content.  Make sure the instructions are concise and not too long.  Make sure to update the AGENTS.md file to reference this new docs file.  If no information is provided below, prompt the user to give the necessary degails about the layer of architecture or coding standards to document.