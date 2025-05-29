# Markdown Formatting Example

This file demonstrates specific formatting rules for Markdown applied by dprint.

<!-- ==========================================
1. Headings
========================================== -->
<!-- Rule: Consistent heading formatting -->
<!-- Description: Proper spacing after heading markers (#) -->

<!-- Before formatting: Inconsistent heading formatting -->

#Heading Level 1 (no space after #)

## Heading Level 2 (extra spaces after ##)

### Heading Level 3 (correct spacing)

<!-- ==========================================
2. Paragraph Spacing
========================================== -->
<!-- Rule: Consistent paragraph spacing -->
<!-- Description: Empty line between paragraphs -->

<!-- Before formatting: Inconsistent paragraph spacing -->

This is the first paragraph.
This is the second paragraph with no empty line before it.

This is the third paragraph with proper spacing.
This line is part of the third paragraph.

This is the fourth paragraph with extra empty lines before it.

<!-- ==========================================
3. Line Breaks
========================================== -->
<!-- Rule: Consistent line break formatting -->
<!-- Description: Use backslash or two spaces for line breaks -->

<!-- Before formatting: Inconsistent line break formatting -->

This line ends with a backslash\
This line follows a backslash line break.
This line ends with two spaces\
This line follows a two-space line break.
This line has no special ending
But this line appears right after it.

<!-- ==========================================
4. Emphasis Formatting
========================================== -->
<!-- Rule: Consistent emphasis formatting -->
<!-- Description: Consistent use of asterisks or underscores -->

<!-- Before formatting: Inconsistent emphasis formatting -->

_This text uses asterisks for italics_
_This text uses underscores for italics_
**This text uses asterisks for bold**
**This text uses underscores for bold**
_**This text uses asterisks for bold italics**_
_**This text uses underscores for bold italics**_
_**This text uses mixed markers**_

<!-- ==========================================
5. List Formatting
========================================== -->
<!-- Rule: Consistent list formatting -->
<!-- Description: Proper spacing and indentation in lists -->

<!-- Before formatting: Inconsistent list formatting -->

- Item 1
  *Item 2 (no space after asterisk)
- Item 3 (extra space after asterisk)

1. Ordered item 1
   2.Ordered item 2 (no space after number)
2. Ordered item 3 (extra space after number)

- Item with nested list
  - Nested item 1
- Nested item 2 (incorrect indentation)
  - Nested item 3 (extra indentation)

<!-- ==========================================
6. Link Formatting
========================================== -->
<!-- Rule: Consistent link formatting -->
<!-- Description: Proper spacing in links -->

<!-- Before formatting: Inconsistent link formatting -->

[Link with no spaces](https://example.com)
[Link with space after text] (https://example.com)
[Link with space before text](https://example.com)
[Link with space after URL](https://example.com)
[Link with title](https://example.com "Example")
[Link with title and spaces](https://example.com "Example")

<!-- ==========================================
7. Image Formatting
========================================== -->
<!-- Rule: Consistent image formatting -->
<!-- Description: Proper spacing in image links -->

<!-- Before formatting: Inconsistent image formatting -->

![Image with no spaces](https://example.com/image.jpg)
![Image with space after text] (https://example.com/image.jpg)
![Image with space before URL](https://example.com/image.jpg)
![Image with title](https://example.com/image.jpg "Example Image")
![Image with title and spaces](https://example.com/image.jpg "Example Image")

<!-- ==========================================
8. Code Block Formatting
========================================== -->
<!-- Rule: Consistent code block formatting -->
<!-- Description: Proper formatting of code blocks -->

<!-- Before formatting: Inconsistent code block formatting -->

Inline code with `no spaces`.
Inline code with `spaces`.

```
Code block with no language specified
```

```javascript
// Code block with language specified
function example() {
  return 'Hello, world!'
}
```

    // Indented code block
    function indentedExample() {
      return "Hello, world!";
    }

<!-- ==========================================
9. Blockquote Formatting
========================================== -->
<!-- Rule: Consistent blockquote formatting -->
<!-- Description: Proper spacing in blockquotes -->

<!-- Before formatting: Inconsistent blockquote formatting -->

> Blockquote with no space after >
> Blockquote with space after >
> Blockquote with extra space after >

> Blockquote with
> nested lines
>
> Nested blockquote with inconsistent spacing
>
> Deeply nested blockquote

<!-- ==========================================
10. Table Formatting
========================================== -->
<!-- Rule: Consistent table formatting -->
<!-- Description: Proper alignment and spacing in tables -->

<!-- Before formatting: Inconsistent table formatting -->

| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

| Left | Center | Right |
| :--- | :----: | ----: |
| Left | Center | Right |
| Left | Center | Right |

<!-- ==========================================
11. Horizontal Rule Formatting
========================================== -->
<!-- Rule: Consistent horizontal rule formatting -->
<!-- Description: Proper formatting of horizontal rules -->

<!-- Before formatting: Inconsistent horizontal rule formatting -->

---

---

---

---

---

---

<!-- ==========================================
12. HTML in Markdown
========================================== -->
<!-- Rule: Consistent HTML formatting in Markdown -->
<!-- Description: Proper formatting of HTML elements in Markdown -->

<!-- Before formatting: Inconsistent HTML formatting -->
<div>This is a div with no attributes</div>

<div class="example">This is a div with attributes</div>

<div class = "example" id = "example-id">This is a div with inconsistent attribute spacing</div>

<table>
<tr><td>Cell 1</td><td>Cell 2</td></tr>
<tr>
<td>Cell 3</td>
<td>Cell 4</td>
</tr>
</table>
