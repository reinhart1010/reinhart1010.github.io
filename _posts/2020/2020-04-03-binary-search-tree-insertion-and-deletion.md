---
layout: post
title: Binary Search Tree Insertion and Deletion
categories: [binus, binus-socs]
tags: [en-us, comp6048]
theme_color: "#7C3AED"
as_seen_on:
  - site_type: binusmaya
    url: https://binusmaya.binus.ac.id/newStudent/#/forum/reader.C15C8D7F-B5B8-49A4-ABF5-47F3FF7DCD62?id=1
---
> **The following article is used as an answer to a [COMP6048 - Data Structures](https://curriculum.binus.ac.id/course/comp6048/) assignment at [BINUS University](https://binus.ac.id).**
> 
> From this source: <https://www.cs.cmu.edu/afs/cs/academic/class/15210-s15/www/lectures/bst-notes.pdf>
> 
> Can you highlight in which scenario BST can be implemented effectively? then please explain the key rules of BST in insertion and deletion?

The Binary Search Tree can be implemented effectively as long as the tree is balanced. When we look into the rules of 2-3 Tree, another type of sorted tree, it is required that all leaves must fall onto the same tree level for similar reasons. One base principle behind balancing is that the longer the longest path of the tree, the higher the execution time needed to evaluate the tree. Even when the amount of the connected nodes/data are very large, an unbalanced or even skewed binary tree will lead to significant increase in algorithm complexity, which will lead to degradation of algorithm performance in searching the data.

The key rules behind inserting the binary tree is to perform a binary search on the top level, i.e. "which of the following children are closest to X?" (see below). When we would like to insert "4" to the tree, the number 5 is closer to 6 (abs(5 - 6) = 1) than 2 (abs(2 - 6) = 4), so do 9 (abs(9 - 2) = 7; abs(9 - 6) = 3). Even though 4 is closer to both 2 and 6, it has to be put under the node "2" since "6" has already have 2 children, as well as to balance the tree.

```
.....X.....

..../.\....

...2...6...

../.../.\..

.1...5...9.
```

However, for deletion, consider the following things:

1. If the selected node is trivial (no more children), we can simply remove the node.
2. If the selected node has only 1 child, remove the node as well as attach the child to the node's parent.
3. If the selected node has 2 child, we have to introduce an inorder node to be attached to the node's parent as a replacement. This node can be either the node with the greatest value on the left child (as *inorder predecessor*), or the node with the least value on the right child (as *inorder successor*).