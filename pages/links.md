---
title: Links
layout: page
permalink: /links
---


<!--<p style="text-align:center"><a href="https://docs.google.com/forms/d/e/1FAIpQLScXFFbWb5M7VkAkiJhZq2OfTScOpfB_dml56YykuCPyJ5vNxg/viewform?usp=sharing&ouid=112122856023999045116">Request a FREE PR envelope!</a></p>-->

<div class="social-links" style="display: flex; justify-content: center; align-items: center;">
  {% for link in site.data.social.links %}
  {% assign link_is_not_empty = link | is_not_empty %}
  {% if link_is_not_empty %}
  <a href="{{ link.url }}" target="_blank" rel="noopener"><span class="fab {{ link.icon }}" aria-hidden="true"></span><span class="screen-reader-text">{{ link.title }}</span></a>
  {% endif %}
  {% endfor %}
</div><!-- .social-links -->
<hr/>

<h3 style="text-align:center">Fated Vampire Mates</h3>

<table style="text-align:center">
    <tr>
        <td><a href="https://www.goodreads.com/book/show/219295456-the-vampire-s-guide-to-wooing-a-dressmaker"><img width="300" src="/images/dressmaker_cover.jpg" /></a></td>
        <td><a href="https://www.goodreads.com/book/show/219295490-the-vampire-s-guide-to-wooing-a-scholar"><img width="300" src="/images/scholar_cover.jpg" /></a></td>
        <td><a href="https://www.goodreads.com/book/show/219295516-the-vampires-guide-to-wooing-a-curator"><img width="300" src="/images/scholar-peek.png" /></a></td>
    </tr>
    <tr>
        <td>
            <a href="https://books2read.com/u/m285YG">Buy</a>
        </td>
        <td>
            <a href="https://www.netgalley.com/catalog/book/790175">Request an ARC on NetGallery</a><br/>
            <a href="https://books2read.com/u/3R2ApL">Pre-order for Feb 21</a>
        </td>
        <td>
            Coming May 15
        </td>
    </tr>
    <tr>
        <td><a href="https://www.goodreads.com/book/show/219295456-the-vampire-s-guide-to-wooing-a-dressmaker">Goodreads</a></td>
        <td><a href="https://www.goodreads.com/book/show/219295490-the-vampire-s-guide-to-wooing-a-scholar">Goodreads</a></td>
        <td><a href="https://www.goodreads.com/book/show/219295516-the-vampires-guide-to-wooing-a-curator">Goodreads</a></td>
    </tr>       
</table>

<h3 style="text-align:center">Seductive Sleuths</h3>

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
            <a href="https://www.goodreads.com/book/show/131107507-companion-to-the-count">Goodreads</a>
        </td>
        <td>
            <a href="https://www.goodreads.com/book/show/131812107-mentor-to-the-marquess">Goodreads</a>
        </td>
        <td>
            <a href="https://www.goodreads.com/book/show/131812290-benefactor-to-the-baroness">Goodreads</a>
        </td>
    </tr>
</table>

<h3 style="text-align:center">Other books</h3>

<table style="text-align: center;">
    <tr>
        <td>
            <a href="https://books2read.com/MarkedForHarvest"><img width="150" src="/images/MFH.jpg" /></a>
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://books2read.com/MarkedForHarvest">Buy</a>
        </td>
    </tr>
</table>
