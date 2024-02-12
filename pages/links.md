---
title: Links
layout: page
permalink: /links
---

### Seductive Sleuths

<table style="text-align: center;">
    <tr>
        <td><a href="https://books2read.com/u/mlpO5A"><img width="300" src="/images/CTTC.jpg" /></a></td>
        <td><a href="https://www.goodreads.com/book/show/131812107-mentor-to-the-marquess"><img width="300" src="/uploads/mttm-moodboard.png" /></a></td>
        <td><a href="https://www.goodreads.com/book/show/131812107-mentor-to-the-marquess"><img width="300" src="/uploads/bttb-moodboard.png" /></a></td>
    </tr>
    <tr>
        <td><a href="https://books2read.com/u/mlpO5A">Pre-order</a><br/></td>
        <td>Pre-order coming soon!</td>
        <td>Pre-order coming soon!</td>
    </tr>
    <tr>
        <td>
            <a href="https://www.goodreads.com/book/show/131107507-companion-to-the-count">Add on Goodreads</a>
        </td>
        <td>
            <a href="https://www.goodreads.com/book/show/131812107-mentor-to-the-marquess">Add on Goodreads</a>
        </td>
        <td>
            <a href="https://www.goodreads.com/book/show/131812290-benefactor-to-the-baroness">Add on Goodreads</a>
        </td>
    </tr>
</table>

### Other books

<table style="text-align: center;">
    <tr>
        <td>
            <a href="https://books2read.com/MarkedForHarvest"><img width="300" src="/images/MFH.jpg" /></a>
        </td>
        <td>
            <a href="https://www.amazon.ca/dp/B0BWH3JY1K/ref=sr_1_1?crid=N68S6DT0CH5L"><img width="300" src="/images/STAC.jpg" /></a>
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://books2read.com/MarkedForHarvest">Buy</a>
        </td>
        <td>
            <a href="https://www.amazon.ca/dp/B0BWH3JY1K/ref=sr_1_1?crid=N68S6DT0CH5L">Read on Kindle Unlimited</a>
        </td>
    </tr>
</table>


### Socials

<div class="social-links">
  {% for link in site.data.social.links %}
  {% assign link_is_not_empty = link | is_not_empty %}
  {% if link_is_not_empty %}
  <a href="{{ link.url }}" target="_blank" rel="noopener"><span class="fab {{ link.icon }}" aria-hidden="true"></span><span class="screen-reader-text">{{ link.title }}</span></a>
  {% endif %}
  {% endfor %}
</div><!-- .social-links -->