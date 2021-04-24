
arr = [3, 2, 1, 5, 8, 7, 6]
temp = ''
for i in range(len(arr)):
    for j in range(len(arr)-1-i):
        if arr[j+1] > arr[j]:
            temp = arr[j+1]
            arr[j+1] = arr[j]
            arr[j] = temp
print(arr)
