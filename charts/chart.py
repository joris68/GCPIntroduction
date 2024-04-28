import matplotlib.pyplot as plt
import numpy as np

# Define the x range for vCPU hours
x = np.linspace(0, 100, 400)

# Define the linear functions
y1 = 0.040 * x  # Google Compute Engine
y2 = 0.0864 * x  # Google Cloud Run

# Create the plot
plt.figure(figsize=(10, 6))
plt.plot(x, y1, label='Google Compute Engine', color='blue')
plt.plot(x, y2, label='Google Cloud Run', color='red')

# Labeling the axes
plt.xlabel('vCPU hour')
plt.ylabel('USD')

# Adding a title
plt.title('Cost Analysis of Google Cloud Services')

# Adding a legend
plt.legend()

# Show the plot
plt.grid(True)
plt.show()
