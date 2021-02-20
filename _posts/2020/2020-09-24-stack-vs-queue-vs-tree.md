---
layout: post
title: "Stack vs Queue vs Tree"
categories: [binus, binus-socs]
tags: [en-us, comp6049]
theme_color: "#7C3AED"
as_seen_on:
  - site_type: binusmaya
    url: https://binusmaya.binus.ac.id/newStudent/#/forum/reader.DA80AEDA-A74E-4C79-A227-A0BE7746D904?id=1
---
> **The following article is used as an answer to a [COMP6049 - Algorithm Design and Analysis](https://curriculum.binus.ac.id/course/comp6049/) course assignment at [BINUS University](https://binus.ac.id).**
> 
> Please explain which data structure (stack or queue or tree) is more effective in term of the prcessing time, you can give the example of its implementation.


<b>Stack and Queue</b>

In general, stacks and queues are simply arrays or “straight” (unbranched) linked lists, which means that the complexity and efficiency for CRUD (Create, Read, Update, and Delete) operations should be similar in terms of time and space (memory usage). Both data structures do have similar instruction sets, which are:

<table style="text-align: left"><tr><th style="background:inherit;">CRUD Type</th><th style="background:inherit;">Instruction</th><th style="background:inherit;">Effect on Stacks</th><th style="background:inherit;">Effect on Queues</th><th style="background:inherit;">Time Complexity</th></tr><tr><td>Create</td><td>Push</td><td>Prepends (add at the beginning) a new item on the stack</td><td>Prepends (add at the beginning) a new item on the queue</td><td><i>O</i>(1)</td></tr><tr><td>Read and Delete</td><td>Pop</td><td>Takes and deletes the first item on the stack</td><td>Takes and deletes the last item on the queue</td><td>Either <i>O</i>(1) up to <i>O</i>(<i>N</i>), depending on its implementations</td></tr><tr><td>Delete</td><td>Empty</td><td>Deletes all items on the stack</td><td>Deletes all items on the stack</td><td><i>O</i>(<i>N</i>), as it requires memory cleaning for each item</td></tr></table>

Stacks and Queues can also inherit several operations from Linked Lists, which are less optimized since all of the items are sorted by time priorities instead of values.

<table style="text-align: left"><tr><th style="background:inherit;">CRUD Type</th><th style="background:inherit;">Instruction</th><th style="background:inherit;">Effect on Stacks</th><th style="background:inherit;">Effect on Queues</th><th style="background:inherit;">Time Complexity</th></tr><tr><td>Read (and Update)</td><td>Search (and Modify)</td><td colspan="2">Finds (and modifies) the <i>n</i><sup>th</sup> item of a given list, or the item with certain values and properties</td><td rowspan="3"><i>O</i>(<i>N</i>), since the items are sorted by priority instead of value</td></tr><tr><td>Create</td><td>Insert</td><td colspan="2">Inserts a new item at a given position of the list</td></tr><tr><td>Delete</td><td>Delete</td><td colspan="2">Deletes the <i>n</i><sup>th</sup> item of a given list, or the item with certain values and properties</td></tr></table>

In conclusion, Stacks and Queues are only efficient for processing items based on when should they be used or executed, instead of processing items which requires sorting and searching optimizations.

<b>Tree</b>

The time complexity and efficiency for processing a tree depends on the structure and properties of each tree. There are several types of trees, which can be generally divided into sorted and unsorted ones.

As the name implies, sorted trees are efficient for processing items which require storage and searching at a frequent rate. An example of this is a binary tree, where every left children has a lesser value compared to the given node, and every right children has a higher value than the node. Here, a search operation on a BST could yield a time complexity of <i>O</i>(log<sub>2</sub><i>N</i>), which is significantly lower than the same operation on a sorted linked list (which could vary between <i>O</i>(<i>N</i>) down to <i>O</i>(<i>N</i>/2), depending on its implementation). As a consequence, all CRUD operations on a binary search tree will yield similar time complexities, as it requires the same searching methodologies before inserting, updating, and/or deleting the nodes.

However, it is important to note that these efficiencies may be reduced significantly if the entire tree is unbalanced. This lead into the development of other forms of sorted trees, such as AVL, Red-Black Tree, as well as B-Tree, in order to reduce unbalances through the introduction of rules and properties. Theoretically, this means that every CRUD operations for a given balanced tree should yield a lesser time complexity as compared to the unbalanced ones.

Unsorted trees are a whole different story, as it can be associated by certain groups or properties which made up the hierarchy. For example, a trie was constructed to group similar words according to their leading letters, such as “C-A-M” which serves as common leading letters for “CAMDEN”, “CAMERA”, “CAMOUFLAGE”, “CAMP”, “CAMPUS”, and so on. Another, yet gigantic example of unsorted tree is a [Linnaean taxonomy tree](https://en.wikipedia.org/wiki/Linnaean_taxonomy) which is used in the field of Biology to identify every known species according to specific physical and physiological properties (as subtrees). Here, the time complexity and efficiencies for this type of tree truly depends on the context as well as the properties which are being searched for, such as searching for different types of biological species under the Linnaean Order “Primates”. Nevertheless, these types of trees are still generally more efficient to search and perform CRUD operations even as compared to a sorted linked list.

<b>Summary</b>

The time efficiency of these data structures truly depends on three main factors:

<ol>
<li><b>the context of the data</b> (e.g. the pending transactions for use in batch processing, the list of items in a store),</li>
<li><b>the structure of the data</b> (e.g. sorted or unsorted? stack or queue? BST or heap?), as well as</li>
<li><b>the purpose of the CRUD operations</b> (e.g. to quickly search for an item in a search engine, to perform batch processing, to search items based on specific categories)</li>
</ol>

Even though that a tree may be considered better in terms of searching, it is still important to consider the other factors as well, as it may affect the actual time complexity for the CRUD operations for the given data structure. An unsorted tree would be way less efficient to search for, and could yield the same time complexity as any forms of linked lists. In batch processing systems, every items on the “Transaction” table are never stored as value-sorted trees (sorted by values instead of time priorities), since a slight difference in the order of items could significantly make a difference into the “Master” table, hence each items should be executed in the correct order.

Nevertheless, trees are still considered more efficient for searching compared to stacks, queues, and linked lists. Sorted trees may also be implemented for better searching and indexing of data. And again, it is important note that the actual time efficiency for CRUD operations on these data structures may depend on other factors as mentioned and discussed above.