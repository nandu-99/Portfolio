class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def search_node(root, key):
    if root is None:
        return -1
    if root.value == key:
        return 1
    left_result = search_node(root.left, key)
    if left_result == 1:
        return 1
    right_result = search_node(root.right, key)
    if right_result == 1:
        return 1
    return -1

# Example usage
root = Node(3)
root.left = Node(2)
root.right = Node(5)
root.left.left = Node(1)
root.left.right = Node(4)

key = 4
result = search_node(root, key)
print(result)