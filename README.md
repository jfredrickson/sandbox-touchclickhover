# Touch/Click/Hover Sandbox

Experiments with accommodating touch, click, and hover events at the same time.

## Use Cases

When the user is using a non-touch device:

* If the user hovers over the trigger link, show the panel.
* If the user hovers out of the trigger link, hide the panel.
* If the user clicks on the trigger link, follow the link normally.
* If the user hovers over the toggle link, show the panel.
* If the user hovers out of the toggle link, hide the panel.

When the user is using a touch device:

* If the user taps the trigger link and the panel is currently hidden, show the panel.
* If the user taps the trigger link and the panel is currently shown, follow the link normally.
* If the user taps the toggle link and the panel is currently hidden, show the panel.
* If the user taps the toggle link and the panel is currently shown, hide the panel.
