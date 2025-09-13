---
title: Links
layout: page
permalink: /links
---

<!--<p style="text-align:center"><a href="https://docs.google.com/forms/d/e/1FAIpQLScXFFbWb5M7VkAkiJhZq2OfTScOpfB_dml56YykuCPyJ5vNxg/viewform?usp=sharing&ouid=112122856023999045116">Request a FREE PR envelope!</a></p>-->

<div class="social-links">
  {% for link in site.data.social.links %}
  {% assign link_is_not_empty = link | is_not_empty %}
  {% if link_is_not_empty %}
  <a href="{{ link.url }}" target="_blank" rel="noopener"><span class="fab {{ link.icon }}" aria-hidden="true"></span><span class="screen-reader-text">{{ link.title }}</span></a>
  {% endif %}
  {% endfor %}
</div><!-- .social-links -->

<hr/>

<ul>
    <li><a href="/newsletter">Subscribe to my newsletter</a></li>
<ul>

<hr/>

<h3>Fated Vampire Mates</h3>

<table style="text-align:center">
    <tr>
        <td>
            <a href="https://www.goodreads.com/book/show/219295456-the-vampire-s-guide-to-wooing-a-dressmaker">Add on Goodreads</a>
        </td>
        <td>
            <a href="https://www.goodreads.com/book/show/219295490-the-vampire-s-guide-to-wooing-a-scholar">Add on Goodreads</a>
        </td>
        <td>
            <a href="https://www.goodreads.com/book/show/219295516-the-vampires-guide-to-wooing-a-curator">Add on Goodreads</a>
        </td>
    </tr>
    <tr>
        <td><a href="https://www.goodreads.com/book/show/219295456-the-vampire-s-guide-to-wooing-a-dressmaker"><img width="300" src="/images/dressmaker_cover.jpg" /></a></td>
        <td><a href="https://www.goodreads.com/book/show/219295490-the-vampire-s-guide-to-wooing-a-scholar"><img width="300" src="/images/curator-peek.png" /></a></td>
        <td><a href="https://www.goodreads.com/book/show/219295516-the-vampires-guide-to-wooing-a-curator"><img width="300" src="/images/scholar-peek.png" /></a></td>
    </tr>
    <tr>
        <td><a href="https://www.goodreads.com/book/show/219295456-the-vampire-s-guide-to-wooing-a-dressmaker">The Vampire's Guide to Wooing a Dressmaker</a></td>
        <td><a href="https://www.goodreads.com/book/show/219295490-the-vampire-s-guide-to-wooing-a-scholar">The Vampire's Guide to Wooing a Scholar</a></td>
        <td><a href="https://www.goodreads.com/book/show/219295516-the-vampires-guide-to-wooing-a-curator">The Vampire's Guide to Wooing a Curator</a></td>
    </tr>   
    <tr>
        <td>Coming Nov 15, 2025</td>
        <td>Coming Feb 21, 2026</td>
        <td>Coming May 15, 2026</td>
    </tr>       
</table>

<h3>Seductive Sleuths</h3>

<table style="text-align: center;">
    <tr>
        <td><a href="https://books2read.com/u/mlpO5A"><img width="300" src="/images/CTTC.jpg" /></a></td>
        <td><a href="https://books2read.com/u/3yXMjV"><img width="300" src="/images/MTTM.jpg" /></a></td>
        <td><a href="https://books2read.com/u/b6qE8p"><img width="300" src="/images/BTTB.jpg" /></a></td>
    </tr>
    <tr>
        <td><a href="https://books2read.com/u/mlpO5A">Buy</a><br/></td>
        <td><a href="https://books2read.com/u/3yXMjV">Buy</a></td>
        <td><a href="https://books2read.com/u/b6qE8p">Buy</a></td>
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

<h3>Other books</h3>

<table style="text-align: center;">
    <tr>
        <td>
            <a href="https://books2read.com/MarkedForHarvest"><img width="300" src="/images/MFH.jpg" /></a>
        </td>
        <td>
            <a href="https://www.amazon.ca/Romancing-Rake-Historical-Romance-Collection-ebook/dp/B0DGFKRJ58"><img width="300" src="/images/RR.jpg" /></a>
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://books2read.com/MarkedForHarvest">Buy</a>
        </td>
        <td>
            <a href="https://www.amazon.ca/Romancing-Rake-Historical-Romance-Collection-ebook/dp/B0DGFKRJ58">Pre-order</a>
        </td>
    </tr>
</table>