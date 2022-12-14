# importing required package
import linecache

# extracting the 5th line
particular_line = linecache.getline('test.txt', 1)

# print the particular line
print(particular_line)