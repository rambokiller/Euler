#!/usr/bin/env python3
#Project Euler: Sum of multiples of 3 and 5 below 1000

sum = 0;

for i in range(1,1000):
	sum += i;

print("Sum: " + str(sum));