import React from "react";

/**
 * Imports other components and hooks.
 */
import Text from ".";
import { useMarkdown } from "../../../hooks";
import markdown from "./demos/Text.demo.md";
import markdown1 from "./demos/Text.demo.1.md";
import markdown2 from "./demos/Text.demo.2.md";

/**
 * Displays the Text demo.
 */
const TextDemo = (props) => {
  const { html } = useMarkdown(markdown);

  const showForms = false;

  return (
    <>
      <Text variant="longform">{html}</Text>
      {showForms && (
        <Text variant="longform">
          <section>
            <h1>Notes:</h1>
            <p>
              All tested on OSX 10.6.1. Obviously I've left out most of the
              standard, and therefore boring, inputs.
            </p>
            <p>
              Currently, this page is only interesting in Opera
              <span class="strike">9.60+ (earlier?)</span> 9.0+ (thanks
              <a href="http://twitter.com/FataL/status/6016610834">@FataL</a>),
              and partially-so in Safari 3+ / Chrome.
            </p>
            <p>
              Safari / Chrome: <code>autofocus</code> (4+),{" "}
              <code>type=search</code>,<code>placeholder</code>,{" "}
              <code>maxlength</code>, <code>:required</code> css pseudo-selector
              (4+), <code>type=range</code>—but can't hook into
              <code>&lt;output&gt;</code>.
            </p>
            <p>
              Opera: everything else, for the most part, except for
              <code>autofocus</code>, <code>placeholder</code>, a chrome style
              for
              <code>type=search</code>.
            </p>
            <p>
              Both Opera and Safari / Chrome have
              <code>type=color</code> implemented—but there is no fancy UI.
            </p>
            <p>
              Click submit, or hit enter to see validation errors in Opera.
              Client-side validation will only work for inputs that have a{" "}
              <code>name</code>:
            </p>
            <p>
              <b>Bruce Lawson</b>
              <a href="http://twitter.com/brucel/status/4443537174">writes:</a>
              <q>
                forms with required attrib. need name attrib too, otherwise they
                don't take part in submission so can't be checked
              </q>
              (thanks!). See also his
              <a href="http://people.opera.com/brucel/demo/html5-forms-demo.html">
                html5 forms demo page.
              </a>
            </p>
          </section>
          <section>
            <h1>Demo:</h1>
            <form>
              <div>
                <label>
                  Text:
                  <input type="text" maxlength="6" />
                </label>
                <code>&lt;input type="text" maxlength="6"/&gt;</code>
              </div>
              <div>
                <label>
                  Search:
                  <input type="search" list="search-suggestions" />
                </label>
                <datalist id="search-suggestions">
                  <option label="DM" value="Depeche Mode"></option>
                  <option label="Moz" value="Morrissey"></option>
                  <option label="NO" value="New Order"></option>
                  <option label="TC" value="The Cure"></option>
                </datalist>
                <code>
                  <pre>
                    &lt;input type="search" autofocus
                    list="search-suggestions"/&gt; &lt;datalist
                    id="search-suggestions"&gt; &lt;option label="DM"
                    value="Depeche Mode"&gt; &lt;option label="Moz"
                    value="Morrissey"&gt; &lt;option label="NO" value="New
                    Order"&gt; &lt;option label="TC" value="The Cure"&gt;
                    &lt;/datalist&gt;
                  </pre>
                </code>
              </div>
              <div>
                <label>
                  Telephone:
                  <input
                    type="tel"
                    pattern="[0-9]{10}"
                    name="tel"
                    title="Phone Number?!?!"
                  />
                </label>
                <code>
                  &lt;input type="tel" pattern="[0-9]{10}" name="tel"
                  title="Phone Number?!?!"/&gt;
                </code>
              </div>
              <div>
                <label>
                  Password:
                  <input type="password" autofocus="" placeholder="Password" />
                </label>
                <code>
                  <pre>
                    &lt;input type="password" placeholder="Password"/&gt;
                  </pre>
                </code>
              </div>
              <div>
                <label>
                  URL:
                  <input type="url" id="url" name="earl" required="" />
                </label>
                <code>
                  <pre>
                    &lt;input type="url" id="url" name="earl" required /&gt;
                  </pre>
                </code>
              </div>
              <div>
                <label>
                  Email:
                  <input type="email" placeholder="foo@bar.com" />
                </label>
                <code>
                  &lt;input type="email" placeholder="foo@bar.com" /&gt;
                </code>
              </div>
              <div>
                <label>
                  Datetime:
                  <input type="datetime" />
                </label>
                <code>
                  <pre>&lt;input type="datetime" /&gt;</pre>
                </code>
              </div>
              <div>
                <label>
                  Date:
                  <input type="date" />
                </label>
                <code>
                  <pre>&lt;input type="date" /&gt;</pre>
                </code>
              </div>
              <div>
                <label>
                  Month:
                  <input type="month" />
                </label>
                <code>&lt;input type="month" /&gt;</code>
              </div>
              <label>
                Week:
                <input type="week" />
              </label>
              <code>&lt;input type="week" /&gt;</code>
              <div>
                <label>
                  Time:
                  <input type="time" />
                </label>
                <code>&lt;input type="time" /&gt;</code>
              </div>
              <label>
                Date-Time Local:
                <input type="datetime-local" />
              </label>
              <code>&lt;input type="datetime-local" /&gt;</code>
              <div>
                <label>
                  Number:
                  <input type="number" min="99" max="101" />
                </label>
                <code>&lt;input type="number" min="99" max="101"/&gt;</code>
              </div>
              <div>
                <label>
                  Range:
                  <input type="range" name="range" />
                  <output required="" onforminput="value=range.value">
                    0
                  </output>
                </label>
                <pre>
                  &lt;input type="range" required name="range" /&gt; &lt;output
                  onforminput="value=range.value"&gt;0&lt;/output&gt;
                </pre>
              </div>
              <div>
                <label>
                  Color:
                  <input type="color" />
                </label>
                <code>&lt;input type="color"/&gt;</code>
              </div>
              <div>
                <label>
                  Checkbox:
                  <input type="checkbox" />
                </label>
                <code>&lt;input type="checkbox"/&gt;</code>
              </div>
              <div>
                <label>
                  Radio:
                  <input type="radio" />
                </label>
                <code>&lt;input type="radio"/&gt;</code>
              </div>
              <div>
                <label>
                  Select:
                  <select>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                    <option>Option 6</option>
                    <option>Option 7</option>
                    <option>Option 8</option>
                    <option>Option 9</option>
                    <option>Option 10</option>
                    <option>Option 11</option>
                  </select>
                </label>
              </div>
              <div>
                <label>
                  File:
                  <input type="file" multiple="" />
                </label>
                <code>&lt;input type="file" multiple /&gt;</code>
              </div>
              <input type="submit" />
            </form>
          </section>
          <p class="small">
            Copyright © 2009 Michael Taylor and licensed under the
            <a href="/code/license.txt">MIT license.</a>
          </p>
        </Text>
      )}
    </>
  );
};

export default TextDemo;
