TODO:

- Style the main application window.
- Show home dashboard if exists.
- Show dashboard list if dashboards exist.
- Show visualisation list if visualisations exist.
- Show zero state with shortcut to create visualisation.

- Bundled visualisations:
  - Schema anomalies
  - Schema view
  - Unused indexes

- Visualisation:
  - Data source:
    - Collection data
      - Aggregation
    - Index information
    - Schema information
    - Command execution
  - Pipeline:

Visualisation Schema:

```json
{
  "name": String,
  "source": {
    "type": String,
    "database": <Optional>String,
    "collection: <Optional>String,
    "pipeline": <Optional>Array
  }
  "visualisation": {
    "type": String
  }
}
```
